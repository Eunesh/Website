-- CreateTable
CREATE TABLE "Admin" (
    "AdminID" TEXT NOT NULL,
    "AdminUsername" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("AdminID")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "Admintoken" TEXT NOT NULL,
    "adminAdminID" TEXT,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_adminAdminID_fkey" FOREIGN KEY ("adminAdminID") REFERENCES "Admin"("AdminID") ON DELETE SET NULL ON UPDATE CASCADE;
