"use strict";

// Slider for slide 0.5
let i0_5 = 0;
let images0_5 = [];
const time = 3000; // Time for both sliders

// Image list for slide 0.5
images0_5[0] = "https://i.postimg.cc/02QtCsty/0-5.png";
images0_5[1] = "https://i.postimg.cc/2jTcv67t/71-C7m-IYenf-L-AC.png";
images0_5[2] = "https://i.postimg.cc/Wzp5CLTS/new.png";
images0_5[3] = "https://i.postimg.cc/RF58PDWb/one.png";
// Change ima
// Change image function for slide 0.5
function changeImg0_5() {
    document.images["slide 0.5"].src = images0_5[i0_5];

    if (i0_5 < images0_5.length - 1) {
        i0_5++;
    } else {
        i0_5 = 0;
    }

    setTimeout(changeImg0_5, time); // Pass the function reference directly
}

// Slider for slide1
let i1 = 0;
let images1 = [];

// Image list for slide1
images1[0] = "https://i.postimg.cc/8PG6mtZN/5w-1.png";
images1[1] = "https://i.postimg.cc/85r6t38P/5w-3.png";
images1[2] = "https://i.postimg.cc/FzyJQLsM/5w-4.png";

// Change image function for slide1
function changeImg1() {
    document.images["slide1"].src = images1[i1];

    if (i1 < images1.length - 1) {
        i1++;
    } else {
        i1 = 0;
    }

    setTimeout(changeImg1, time); // Pass the function reference directly
}


let i2 = 0;
let images2 = [];

// Image list for slide2
images2[0] = "https://i.postimg.cc/kG5M4Rn6/15w-3.png";
images2[1] = "https://i.postimg.cc/SRtSzQsZ/15w-4.png";

// Change image function for slide2
function changeImg2() {
    document.images["slide2"].src = images2[i2];

    if (i2 < images2.length - 1) {
        i2++;
    } else {
        i2 = 0;
    }

    setTimeout(changeImg2, time); // Pass the function reference directly
}

window.onload = function() {
    changeImg0_5();
    changeImg1();
    changeImg2();
};

let i3 = 0;
let images3 = [];

// Image list for slide3
images3[0] = "https://i.postimg.cc/mghKXNr6/20w-1.png";
images3[1] = "https://i.postimg.cc/52GTZYY9/20w-2.png";
images3[2] = "https://i.postimg.cc/50WG2hSZ/20w-3.png";
images3[3] = "https://i.postimg.cc/Zqd2Zbp8/20w-4.png";


// Change image function for slide3
function changeImg3() {
    document.images["slide3"].src = images3[i3];

    if (i3 < images3.length - 1) {
        i3++;
    } else {
        i3 = 0;
    }

    setTimeout(changeImg3, time); // Pass the function reference directly
}


let i4 = 0;
let images4 = [];

// Image list for slide4
images4[0] = "https://i.postimg.cc/Z5bJTDL7/25w-1.png";
images4[1] = "https://i.postimg.cc/vZ0bDLqQ/25w-2.png";
// Change image function for slide4
function changeImg4() {
    document.images["slide4"].src = images4[i4];

    if (i4 < images4.length - 1) {
        i4++;
    } else {
        i4 = 0;
    }

    setTimeout(changeImg4, time); // Pass the function reference directly
}



let i5 = 0;
let images5 = [];

// Image list for slide5
images5[0] = "https://i.postimg.cc/2ySgsPYh/35-1.png";
images5[1] = "https://i.postimg.cc/gjD09CV2/1.png";

// Change image function for slide5
function changeImg5() {
    document.images["slide5"].src = images5[i5];

    if (i5 < images5.length - 1) {
        i5++;
    } else {
        i5 = 0;
    }

    setTimeout(changeImg5, time); // Pass the function reference directly
}



let i7 = 0;
let images7 = [];

// Image list for slide7
images7[0] = "https://i.postimg.cc/7YKDBngp/a-Copy.png";
images7[1] = "https://i.postimg.cc/bNmvmjY6/2.png";


// Change image function for slide7
function changeImg7() {
    document.images["slide7"].src = images7[i7];

    if (i7 < images7.length - 1) {
        i7++;
    } else {
        i7 = 0;
    }

    setTimeout(changeImg7, time); // Pass the function reference directly
}



let i8 = 0;
let images8 = [];

// Image list for slide8
images8[0] = "https://i.postimg.cc/8CQ65Gjd/1-Copy.jpg";
images8[1] = "https://i.postimg.cc/9Qq9C0FF/Rectangle-Box-Free-Mockup-01-Copy.jpg";
images8[2] = "https://i.postimg.cc/TYsbzgx4/Rectangle-Box-Free-Mockup-02-Copy.jpg";
images8[3] = "https://i.postimg.cc/vmr6xKVJ/Untitled-1-Copy.jpg";

// Change image function for slide8
function changeImg8() {
    document.images["slide8"].src = images8[i8];

    if (i8 < images8.length - 1) {
        i8++;
    } else {
        i8 = 0;
    }

    setTimeout(changeImg8, time); // Pass the function reference directly
}


let i9 = 0;
let images9 = [];

// Image list for slide9
images9[0] = "https://i.postimg.cc/8CQ65Gjd/1-Copy.jpg";
images9[1] = "https://i.postimg.cc/vmr6xKVJ/Untitled-1-Copy.jpg";
images9[2] = "https://i.postimg.cc/V6M0nLVL/Rectangle-Box-Free-Mockup-01-Copy.jpg";
images9[3] = "https://i.postimg.cc/TP5Kv3Gq/Rectangle-Box-Free-Mockup-02-Copy.jpg";

// Change image function for slide9
function changeImg9() {
    document.images["slide9"].src = images9[i9];

    if (i9 < images9.length - 1) {
        i9++;
    } else {
        i9 = 0;
    }

    setTimeout(changeImg9, time); // Pass the function reference directly
}



let i10 = 0;
let images10 = [];

// Image list for slide10
images10[0] = "https://i.postimg.cc/ZnJTDTVc/71-Kg-Bn-EGbz-L-AC-UF894-1000-QL80-1-Copy.jpg";
images10[1] = "https://i.postimg.cc/mDYLwcNk/71-Kg-Bn-EGbz-L-AC-UF894-1000-QL80-Copy.jpg";
images10[2] = "https://i.postimg.cc/sxK3ktLR/Untitled-1.jpg";

// Change image function for slide10
function changeImg10() {
    document.images["slide10"].src = images10[i10];

    if (i10 < images10.length - 1) {
        i10++;
    } else {
        i10 = 0;
    }

    setTimeout(changeImg10, time); // Pass the function reference directly
}



let i11 = 0;
let images11 = [];

// Image list for slide11
images11[0] = "https://i.postimg.cc/ZnJTDTVc/71-Kg-Bn-EGbz-L-AC-UF894-1000-QL80-1-Copy.jpg";
images11[1] = "https://i.postimg.cc/mDYLwcNk/71-Kg-Bn-EGbz-L-AC-UF894-1000-QL80-Copy.jpg";
images11[2] = "https://i.postimg.cc/sxK3ktLR/Untitled-1.jpg";


// Change image function for slide11
function changeImg11() {
    document.images["slide11"].src = images11[i11];

    if (i11 < images11.length - 1) {
        i11++;
    } else {
        i11 = 0;
    }

    setTimeout(changeImg11, time); // Pass the function reference directly
}




let i12 = 0;
let images12 = [];

// Image list for slide12
images12[0] = "https://i.postimg.cc/L5VtgByV/images.jpg";
images12[1] = "https://i.postimg.cc/GmXX5rxj/products.jpg";

// Change image function for slide12
function changeImg12() {
    document.images["slide12"].src = images12[i12];

    if (i12 < images12.length - 1) {
        i12++;
    } else {
        i12 = 0;
    }

    setTimeout(changeImg12, time); // Pass the function reference directly
}


let i13 = 0;
let images13 = [];

// Image list for slide13
images13[0] = "https://i.postimg.cc/9Qg1t7TB/Box-Mockups-OK-3-Copy.jpg";
images13[1] = "https://i.postimg.cc/L5VtgByV/images.jpg";

// Change image function for slide13
function changeImg13() {
    document.images["slide13"].src = images13[i13];

    if (i13 < images13.length - 1) {
        i13++;
    } else {
        i13 = 0;
    }

    setTimeout(changeImg13, time); // Pass the function reference directly
}

let i14 = 0;
let images14 = [];

// Image list for slide14
images14[0] = "https://i.postimg.cc/g2NZhJNp/Box-Mockups-OK-3-Copy.jpg";
images14[1] = "https://i.postimg.cc/L5VtgByV/images.jpg";

// Change image function for slide14
function changeImg14() {
    document.images["slide14"].src = images14[i14];

    if (i14 < images14.length - 1) {
        i14++;
    } else {
        i14 = 0;
    }

    setTimeout(changeImg14, time); // Pass the function reference directly
}



let i15 = 0;
let images15 = [];

// Image list for slide15
images15[0] = "https://i.postimg.cc/bvjLLLnP/61-JSZbwbp-ML-AC-UF1000-1000-QL80.jpg";
images15[1] = "https://i.postimg.cc/q7fDS499/64543d624e5bd920a62f0b9b-neporal-4-pack.jpg";
images15[2] = "https://i.postimg.cc/NMsDvMbP/Charger-Lights-for-Home-LED-Emergency-Rechargeable-Light-Bulb-for-Outerdoor-Camping-Lighting-and-Ind.webp";

// Change image function for slide15
function changeImg15() {
    document.images["slide15"].src = images15[i15];

    if (i15 < images15.length - 1) {
        i15++;
    } else {
        i15 = 0;
    }

    setTimeout(changeImg15, time); // Pass the function reference directly
}







let i16 = 0;
let images16 = [];

// Image list for slide16
images16[0] = "https://i.postimg.cc/wj8bzk1b/10w-1.png";
images16[1] = "https://i.postimg.cc/WbJfxy1k/10w-2.png";
images16[2] = "https://i.postimg.cc/FHyCHJcF/10w-3.png";

// Change image function for slide16
function changeImg16() {
    document.images["slide16"].src = images16[i16];

    if (i16 < images16.length - 1) {
        i16++;
    } else {
        i16 = 0;
    }

    setTimeout(changeImg16, time); // Pass the function reference directly
}

let i17 = 0;
let images17 = [];

// Image list for slide17
images17[0] = "https://i.postimg.cc/nLrNhvJ1/Box-Mockup-01.jpg";
images17[1] = "https://i.postimg.cc/7LQ83KVc/led-panel-lights.jpg";
images17[2] = "https://i.postimg.cc/DwT20pjP/new-v.png";

// Change image function for slide17
function changeImg17() {
    document.images["slide17"].src = images17[i17];

    if (i17 < images17.length - 1) {
        i17++;
    } else {
        i17 = 0;
    }

    setTimeout(changeImg17, time); // Pass the function reference directly
}

let i18 = 0;
let images18 = [];

// Image list for slide18
images18[0] = "https://i.postimg.cc/y8ks12BB/20-TUBE-LIGHT.png";
images18[1] = "https://i.postimg.cc/q7r1sJd4/tube-light-20-w.png";
// Add more images as needed

// Change image function for slide18
function changeImg18() {
    document.images["slide18"].src = images18[i18];

    if (i18 < images18.length - 1) {
        i18++;
    } else {
        i18 = 0;
    }

    setTimeout(changeImg18, time); // Pass the function reference directly
}

let i19 = 0;
let images19 = [];

// Image list for slide19
images19[0] = "https://i.postimg.cc/y8ks12BB/20-TUBE-LIGHT.png";
images19[1] = "https://i.postimg.cc/tCR9fYMs/25-w-tube-light.png";
// Add more images as needed

// Change image function for slide19
function changeImg19() {
    document.images["slide19"].src = images19[i19];

    if (i19 < images19.length - 1) {
        i19++;
    } else {
        i19 = 0;
    }

    setTimeout(changeImg19, time); // Pass the function reference directly
}


window.onload = function() {
    changeImg0_5();
    changeImg1();
    changeImg2();
    changeImg3();
    changeImg4();
    changeImg5();
    changeImg7();
    changeImg8();
    changeImg9();
    changeImg10();
    changeImg11();
    changeImg12();
    changeImg13();
    changeImg14();
    changeImg15();
    changeImg16();
    changeImg17();
    changeImg18();
    changeImg19();
};
