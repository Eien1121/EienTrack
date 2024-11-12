"use strict";
const gulp = require("gulp");
const minify = require("gulp-minify");
const inject = require("gulp-inject-string");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const distPath = "./../../dist/tokuu_third/" + process.env.npm_package_version;

gulp.task("buildJs", () => {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(minify({ ext: { min: ".min.js" } }))
        .pipe(gulp.dest(distPath));
});

gulp.task(
    "buildDts",
    gulp.series("buildJs", () => {
        return tsProject.src().pipe(tsProject()).dts.pipe(gulp.dest(distPath));
    })
);

gulp.task(
    "build",
    gulp.series("buildDts", () => {
        return gulp.src(distPath + "/**/*").pipe(gulp.dest("../../examples/vue_element/public/libs/tokuu_third/"));
    })
);
