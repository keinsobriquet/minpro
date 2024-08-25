import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <footer className="footer bg-transparent text-white p-10">
        <aside className='mx-auto'>
          <Image src={'/logoHD.svg'} width={320} height={100} alt="" />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-transparent text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by LECALICUS
          </p>
        </aside>
      </footer>
    </div>
  );
}
