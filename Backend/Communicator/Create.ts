import type { PrismaClient } from "@prisma/client";

interface datatypeEvent {
  id?: string;
  Eventname: string;
  ThumbnailImg: string;
}

interface datatypeImage {
  ImageId?: string;
  ImageName: string;
  eventid: string;
}

interface datatypeAdmin {
  AdminId?: string;
  AdminUsername: string;
  password: string;
}

interface datatypetoken {
  id?: number;
  Admintoken: string;
  adminAdminID: string | null;
  createdA?: Date;
  updatedAt?: Date;
}

export class Create {
  private readonly prisma: PrismaClient;

  constructor(Prisma: PrismaClient) {
    this.prisma = Prisma;
  }
  async createEvent(data: datatypeEvent): Promise<datatypeEvent> {
    const newEvent = await this.prisma.event.create({
      data,
    });

    return newEvent;
  }

  async createImage(data: datatypeImage): Promise<datatypeImage> {
    const newImage = await this.prisma.image.create({
      data,
    });

    return newImage;
  }

  async createAdmin(data: datatypeAdmin): Promise<datatypeAdmin> {
    const newAdmin = await this.prisma.admin.create({
      data,
    });

    return newAdmin;
  }

  async createToken(data: datatypetoken): Promise<datatypetoken> {
    const newToken = await this.prisma.token.create({
      data,
    });

    return newToken;
  }
}

// export const create = new Create();
