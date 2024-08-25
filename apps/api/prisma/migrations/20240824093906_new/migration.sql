-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('attendee', 'eventorg') NOT NULL,
    `dob` VARCHAR(191) NULL,
    `refCode` VARCHAR(191) NULL,
    `codeUsed` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,
    `point` INTEGER NULL,
    `discount` INTEGER NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    UNIQUE INDEX `User_refCode_key`(`refCode`),
    UNIQUE INDEX `User_codeUsed_key`(`codeUsed`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `eventname` VARCHAR(191) NOT NULL,
    `type` ENUM('free', 'paid') NOT NULL,
    `price` DOUBLE NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `venue` VARCHAR(191) NOT NULL,
    `quota` INTEGER NOT NULL,
    `category` ENUM('rocknroll', 'edm', 'jazz', 'kpop', 'classic', 'country', 'pop', 'metal') NOT NULL,
    `description` TEXT NOT NULL,
    `media` VARCHAR(191) NULL,

    UNIQUE INDEX `Event_eventname_key`(`eventname`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `eventID` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `raw_price` DOUBLE NOT NULL,
    `total_discount` INTEGER NOT NULL,
    `sum_price` DOUBLE NOT NULL,
    `status` ENUM('pending', 'waiting', 'paid', 'decline') NOT NULL,
    `proof` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `review_content` TEXT NOT NULL,
    `ratings` INTEGER NOT NULL,
    `userID` INTEGER NOT NULL,
    `eventID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `start_date` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `voucher_code` VARCHAR(191) NOT NULL,
    `quota` INTEGER NOT NULL,
    `discount_percentage` INTEGER NOT NULL,
    `eventID` INTEGER NOT NULL,

    UNIQUE INDEX `Promotion_eventID_key`(`eventID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReferralCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `point` INTEGER NOT NULL DEFAULT 10000,
    `StartsAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ExpiresAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_eventID_fkey` FOREIGN KEY (`eventID`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_eventID_fkey` FOREIGN KEY (`eventID`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotion` ADD CONSTRAINT `Promotion_eventID_fkey` FOREIGN KEY (`eventID`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferralCode` ADD CONSTRAINT `ReferralCode_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
