---
title: "Review of the required Statistics for Data Science - Part 1"
publishedAt: 2023-11-26
description: "Quick review over concepts like mean, variance, covariance, correlation coefficient, standard deviation and z-score."
slug: "required-statistics-for-ds-1"
isPublish: true
---

## Review of the required Statistics for Data Science - Part 1

This article is a quick review of Essential Statistics for Working with Data.

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#mean">Mean</a>
    </li>
    <li><a href="#variance">Variance</a></li>
    <li><a href="#covariance">Covariance</a></li>
    <li><a href="#correlation-coefficient">Correlation Coefficient</a></li>
    <li><a href="#standard-deviation">Standard Deviation</a></li>
    <li><a href="#standard-deviation">Z-Score</a></li>
  </ol>
</details>

### Mean

The mean **_is the average of a data set_**.

$$
E(x) = \frac{1}{n} \sum_{i=1} ^{n} x_i
$$

$E(x)$ = Arithmetic Mean

$n$ = total number of samples

$x_i$ = dataset value

---

### Variance

Variance is **a measure of how data points differ from the mean**.

$$
var(x) = \frac{1}{n-1} \sum_{i=1} ^{n} (x_i -\bar{x})^2
$$

$var(x)$ = Variance

$n$ = total number of samples

$x_i$ = dataset value

$\bar{x}$ = Arithmetic Mean

---

### Covariance

Covariance **measures the direction of the relationship between two variables**.

$$
cov(x, y) = \frac{1}{n-1} \sum_{i=1} ^{n} (x_i -\bar{x}) (y_i -\bar{y})
$$

$cov(x,y)$ = Covariance

$n$ = total number of samples

$x_i, y_i$ = dataset values

$\bar{x},\bar{y}$ = Arithmetic Mean

---

### Correlation Coefficient

A correlation coefficient is a numerical measure of some type of correlation, meaning a statistical relationship between two variables.

$$
corr(x, y) = \frac{cov(x,y)}{\sqrt{var(x)}{\sqrt{var(y)}}}
$$

$corr(x,y)$ = Correlation Coefficient

$cov(x,y)$ = Covariance

$var(x)$ = Variance of x

$var(y)$ = Variance of y

---

### Example Problem

<img src="/example_problem.png"/>

---

### Standard Deviation

A standard deviation (or σ) is **a measure of how dispersed the data is in relation to the mean**.

$$
\sigma(x) = \sqrt{\frac{\sum_{i=1} ^{n} (x_i-\bar{x})^2}{n}}
$$

$\sigma(x)$ = Standard Deviation

$n$ = total number of samples

$x_i$ = dataset values

$\bar{x}$ = Arithmetic Mean

---

### Z-Score

A z-score, or standard score, is **used for standardizing scores on the same scale by dividing a score's deviation by the standard deviation in a data set**.

$$
z(x_i) = \frac{x-\bar{x}}{\sigma(x)}
$$

$z(x_i)$ = Z-Score for sample _i_

$\sigma(x)$ = Standard Deviation

$x_i$ = dataset values

$\bar{x}$ = Arithmetic Mean
