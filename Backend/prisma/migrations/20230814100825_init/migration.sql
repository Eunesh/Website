-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "Eventname" TEXT NOT NULL,
    "ThumbnailImg" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "ImageId" TEXT NOT NULL,
    "ImageName" TEXT NOT NULL,
    "eventid" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("ImageId")
);

-- CreateTable
CREATE TABLE "Members" (
    "MembersID" TEXT NOT NULL,
    "Members_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "Members_image" TEXT NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("MembersID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_phone_number_key" ON "Members"("phone_number");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
