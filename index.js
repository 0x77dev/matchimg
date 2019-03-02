#!/usr/local/bin/node
const cv = require('opencv4nodejs');
const cli = require("repl").start("Match> ");
const Match = async (oMat, mat) => {
    // Load images
    const originalMat = await cv.imreadAsync(oMat);
    const Mat = await cv.imreadAsync(mat);

    // Match template (the brightest locations indicate the highest match)
    const matched = originalMat.matchTemplate(Mat, 5);

    // Use minMaxLoc to locate the highest value (or lower, depending of the type of matching method)
    const minMax = matched.minMaxLoc();
    const { maxLoc: { x, y } } = minMax;

    // Draw bounding rectangle
    originalMat.drawRectangle(
        new cv.Rect(x, y, Mat.cols, Mat.rows),
        new cv.Vec(0, 255, 0),
        2,
        cv.LINE_8
    );

    // Open result in new window
    cv.imshow(oMat + " / " + mat, originalMat);
    // /cv.waitKey();
    return cv;
};

//Match("findwaldo.jpg", "waldo.jpg");
console.log("To Match something run:", "\n", "Math(originalImage, andWhatToFind)");
cli.context.Match = Match;
module.exports = Match;
