import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();
    console.log("Teams fetched:", teams);

    const teamsWithUsernames = await Promise.all(
      teams.map(async (team: any) => {
        console.log(`Fetching user details for team: ${team.id}`);
        const productOwner = await prisma.user.findUnique({
            
          where: { userId: team.productOwnerUserId! },
          select: { username: true },
        });

        const projectManager = await prisma.user.findUnique({
          where: { userId: team.projectManagerUserId! },
          select: { username: true },
        });
        
        console.log("User details fetched:", {
            productOwner,
            projectManager,
          });
        return {
            
          ...team,
          productOwnerUsername: productOwner?.username,
          projectManagerUsername: projectManager?.username,
        };
      })
    );
    console.log("Final teams with usernames:", teamsWithUsernames);
    res.json(teamsWithUsernames);
    
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving teams: ${error.message}` });
  }
};