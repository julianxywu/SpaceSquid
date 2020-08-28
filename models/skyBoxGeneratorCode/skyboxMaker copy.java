import java.awt.*;
import java.awt.image.*;
import java.io.File;
import java.io.IOException;

import javax.imageio.*;


public class skyboxMaker extends DrawingGUI {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final int thumbWidth = 2100, thumbHeight = 2100;

	private static int randColor() {
		int random = (int) (Math.random() * 4);
		int color;
		if (random == 0) {
			color = new Color(255, 255, 255).getRGB();
		}
		else if (random == 1) {
			color = new Color(123, 129, 154).getRGB();
		}
		else if (random == 2) {
			color = new Color(185, 190, 202).getRGB();
		}
		else {
			color = new Color(217,224,237).getRGB();
		}
		return color;
	}
	
	private static BufferedImage skyboxify(BufferedImage image) {
		BufferedImage result = new BufferedImage(thumbWidth, thumbHeight, image.getType());
		int color;
		
		for (int y = 0; y < thumbHeight; y++) {
			for (int x = 0; x < thumbWidth; x++) {
				int random1 = (int) (Math.random() * 1001);
				if (random1 < 1) {
					int random2 = (int) (Math.random() * 10);
					if (random2 < 5) {
						color = randColor();
						result.setRGB(x, y, color);
						if (x < thumbWidth - 1) {
							color = randColor();
							result.setRGB(x + 1, y, color);
						}
						if (y < thumbHeight - 1) {
							color = randColor();
							result.setRGB(x, y + 1, color);
						}
						if (x < thumbWidth - 1 && y < thumbHeight - 1) {
							color = randColor();
							result.setRGB(x + 1, y + 1, color);
						}
					}
					else if (random2 < 8) {
						color = randColor();
						result.setRGB(x, y, color);
						if (y < thumbHeight - 1) {
							color = randColor();
							result.setRGB(x, y + 1, color);
						}
						if (y < thumbHeight - 2) {
							color = randColor();
							result.setRGB(x, y + 2, color);
						}
						if (x < thumbWidth - 1) {
							color = randColor();
							result.setRGB(x + 1, y, color);
							if (y < thumbHeight - 1) {
								color = randColor();
								result.setRGB(x + 1, y + 1, color);
							}
							if (y < thumbHeight - 2) {
								color = randColor();
								result.setRGB(x + 1, y + 2, color);
							}
						}
						if (x < thumbWidth - 2) {
							color = randColor();
							result.setRGB(x + 2, y, color);
							if (y < thumbHeight - 1) {
								color = randColor();
								result.setRGB(x + 2, y + 1, color);
							}
							if (y < thumbHeight - 2) {
								color = randColor();
								result.setRGB(x + 2, y + 2, color);
							}
						}
					}
					else {
						color = randColor();
						result.setRGB(x, y, color);
						if (y < thumbHeight - 1) {
							color = randColor();
							result.setRGB(x, y + 1, color);
						}
						if (y < thumbHeight - 2) {
							color = randColor();
							result.setRGB(x, y + 2, color);
						}
						if (y < thumbHeight - 3) {
							color = randColor();
							result.setRGB(x, y + 3, color);
						}
						if (x < thumbWidth - 1) {
							color = randColor();
							result.setRGB(x + 1, y, color);
							if (y < thumbHeight - 1) {
								color = randColor();
								result.setRGB(x + 1, y + 1, color);
							}
							if (y < thumbHeight - 2) {
								color = randColor();
								result.setRGB(x + 1, y + 2, color);
							}
							if (y < thumbHeight - 3) {
								color = randColor();
								result.setRGB(x + 1, y + 3, color);
							}
						}
						if (x < thumbWidth - 2) {
							color = randColor();
							result.setRGB(x + 2, y, color);
							if (y < thumbHeight - 1) {
								color = randColor();
								result.setRGB(x + 2, y + 1, color);
							}
							if (y < thumbHeight - 2) {
								color = randColor();
								result.setRGB(x + 2, y + 2, color);
							}
							if (y < thumbHeight - 3) {
								color = randColor();
								result.setRGB(x + 2, y + 3, color);
							}
						}
						if (x < thumbWidth - 3) {
							color = randColor();
							result.setRGB(x + 3, y, color);
							if (y < thumbHeight - 1) {
								color = randColor();
								result.setRGB(x + 3, y + 1, color);
							}
							if (y < thumbHeight - 2) {
								color = randColor();
								result.setRGB(x + 3, y + 2, color);
							}
							if (y < thumbHeight - 3) {
								color = randColor();
								result.setRGB(x + 3, y + 3, color);
							}
						}
					}
				}
			}
		}
		return result;
	}

	public static void main(String[] args) {
		for (int i = 0; i < 54; i++) {
			BufferedImage blackSky = loadImage("pictures/blankSkyTexture.jpg");
			BufferedImage completedSkyBox = skyboxify(blackSky);
			String outputName = "completedSkyBoxSide" + Integer.toString(i) + ".png";
			File outputfile = new File(outputName);
		    try {
				ImageIO.write(completedSkyBox, "png", outputfile);
			} 
		    catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
