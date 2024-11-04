import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function CreateBranch(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, location, managerName } = req.body;

    await prisma.$transaction(async (prisma) => {
      const findBranch = await prisma.branch.findFirst({
        where: {
          name,
        },
      });

      if (findBranch) {
        throw new Error("Branch with that name already exist");
      }

      const branch = await prisma.branch.create({
        data: {
          name,
          location,
        },
      });

      const manager = await prisma.manager.create({
        data: {
          name: managerName,
          branchId: branch.id,
        },
      });

      res.status(200).send({
        message: "Success",
        data: {
          branch,
          manager,
        },
      });
    });
  } catch (err) {
    next(err);
  }
}

async function GetBranches(req: Request, res: Response, next: NextFunction) {
  try {
    interface IFilter {
      page: number;
      pageSize: number;
    }
    const { page, pageSize } = req.query;

    const filter: IFilter = {
      page: parseInt(page as string) || 1,
      pageSize: parseInt(pageSize as string) || 10,
    };

    const data = await prisma.branch.findMany();
    //  const data = await prisma.branch.findMany({
    //    skip: filter.page != 1 ? (filter.page - 1) * filter.pageSize : 0,
    //    take: filter.pageSize,
    //    where: {
    //      AND: [
    //        {
    //          name: {
    //            not: null,
    //          },
    //        },
    //        {
    //          location: "online",
    //        },
    //      ],
    //    },
    //  });
    console.log(data);

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function GetBranch(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const data = await prisma.branch.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        manager: true,
      },
    });

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function UpdateBranch(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    const data = await prisma.branch.update({
      where: { id: parseInt(id) },
      data: {
        name,
        location,
      },
    });

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function DeleteBranch(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await prisma.branch.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
}

export { CreateBranch, GetBranches, GetBranch, UpdateBranch, DeleteBranch };
