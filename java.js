//code 1
// const obj = {
//   name: "Rajesh",
//   normalFunc: function () {
//     console.log("Normal:", this.name);
//   }
// };

// obj.normalFunc(); // 👉 "Normal: Rajesh"

//code 2
// const obj = {
//   name: "Rajesh",
//   arrowFunc: () => {
//     console.log("Arrow:", this.name);
//   }
// };

// obj.arrowFunc(); // 👉 "Arrow: undefined"

//code 3
const obj = {
  name: "Rajesh",
  normal: function () {
    setTimeout(function () {
      console.log("Normal:", this.name);
    }, 1000);
  },
  arrow: function () {
    setTimeout(() => {
      console.log("Arrow:", this.name);
    }, 1000);
  }
};

obj.normal(); // 👉 "Normal: undefined" (because setTimeout runs in window scope)
obj.arrow();  // 👉 "Arrow: Rajesh"
