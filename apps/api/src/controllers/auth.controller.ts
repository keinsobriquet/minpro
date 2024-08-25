import { rCode } from '@/helpers/createRefCode';
import { createToken } from '@/helpers/createToken';
import { hashPass } from '@/helpers/hashpassword';
import prisma from '@/prisma';
import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { transporter } from '@/helpers/nodemailer';

export class AuthController {
  async createAttendeeData(req: Request, res: Response) {
    try {
      const attendeeData = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.email }],
        },
      });

      if (attendeeData?.email == req.body.email) throw 'email has been used';
      if (attendeeData?.username == req.body.username)
        throw 'username has been used';

      const password = await hashPass(req.body.password);

      const refCode = rCode(req.body.username, req.body.phone);

      const newAttendeeData = await prisma.user.create({
        data: { ...req.body, password, refCode, role: 'attendee' },
      });

      const token = createToken({
        id: newAttendeeData!.id,
        role: (newAttendeeData!.role = 'attendee'),
      });

      const templatePath = path.join(__dirname, '../templates', 'verify.hbs');
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        username: req.body.username,
        link: `http://localhost:3000/verify/${token}`,
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: req.body?.email,
        subject: 'Welcome to Lecalicus',
        html,
      });

      return res.status(201).send(newAttendeeData);
    } catch (error) {
      res.status(400).send({
        status: error,
        msg: 'error',
      });
    }
  }

  async loginAttendee(req: Request, res: Response) {
    try {
      const attendee = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.data }, { email: req.body.data }],
        },
      });

      if (!attendee) throw 'User not found';

      if (!attendee.is_verified)
        throw 'User is not verified, please verify yourself first';

      const validPassword = await compare(req.body.password, attendee.password);

      if (!validPassword) throw 'Please enter correct password';

      const token = createToken({
        id: attendee!.id,
        role: (attendee.role = 'attendee'),
      });

      res.status(200).send({
        status: 'ok',
        msg: 'login success',
        token,
        attendee,
      });
    } catch (err) {
      res.status(400).send({
        status: 'err',
        msg: err,
      });
    }
  }

  async createEOData(req: Request, res: Response) {
    try {
      const eventOrgData = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.username }, { email: req.body.email }],
        },
      });

      if (eventOrgData?.email == req.body.email) throw 'email has been used';
      if (eventOrgData?.username == req.body.username)
        throw 'username has been used';

      const password = await hashPass(req.body.password);

      const newEventOrgData = await prisma.user.create({
        data: { ...req.body, password, role: 'eventorg' },
      });

      const token = createToken({
        id: newEventOrgData!.id,
        role: (newEventOrgData!.role = 'eventorg'),
      });

      const templatePath = path.join(__dirname, '../templates', 'verify.hbs');
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        username: req.body.username,
        link: `http://localhost:3000/verification/${token}`,
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: req.body?.email,
        subject: 'Welcome to Lecalicus',
        html,
      });

      return res.status(201).send(newEventOrgData);
    } catch (error) {
      res.status(400).send({
        status: error,
        msg: 'error',
      });
    }
  }

  async loginEO(req: Request, res: Response) {
    try {
      const eventorg = await prisma.user.findFirst({
        where: {
          OR: [{ username: req.body.data }, { email: req.body.data }],
        },
      });
      const token = createToken({
        id: eventorg!.id,
        role: (eventorg!.role = 'eventorg'),
      });

      res.status(200).send({
        status: 'ok',
        msg: 'login success',
        token,
        eventorg,
      });

    } catch (err) {
      res.status(400).send({
        status: 'err',
        msg: err,
      });
    }
  }

  async verifyUser(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.user.id,
        },
      });

      if (user?.is_verified) throw 'User has been verified';

      await prisma.user.update({
        where: {
          id: req.user.id,
        },
        data: {
          is_verified: true,
        },
      });

      res.status(200).send({
        status: 'ok',
        msg: 'User has been verified',
      });
    } catch (error) {
      res.status(400).send({
        status: 'error',
        msg: error,
      });
    }
  }
}
