import { Request, Response, Router } from "express";
import StudiosController from "../controllers/studios.controller";

const router = Router();
const scraper = new StudiosController();

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await scraper.getAllStudios();
    res.send({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

// router.get("/:name", async (req: Request, res: Response) => {
//   try {
//     const { name } = req.params;
//     if (!name) throw new Error("No studio name provided");

//     const response = await scraper.getStudioByName(name);
//     res.send({ success: true, data: response });
//   } catch (error) {
//     console.log("ERROR", error);
//     res.status(500).send({ error: true, message: error.message });
//   }
// });

// router.get("/:country");

export { router };