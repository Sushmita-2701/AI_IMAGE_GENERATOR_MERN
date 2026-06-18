import { createError } from "../error.js";

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return next(createError(400, "Prompt is required"));
    }

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}`;

    res.status(200).json({
      success: true,
      photo: imageUrl,
    });
  } catch (error) {
    next(
      createError(
        error.status || 500,
        error.message || "Image generation failed"
      )
    );
  }
};