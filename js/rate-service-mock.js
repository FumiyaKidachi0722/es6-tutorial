let rates = [
  { name: "30 years fixed", rate: "13", years: "30" },
  { name: "20 years fixed", rate: "2.8", years: "20" },
];

export let findAll = () =>
  new Promise((resolve, reject) => {
    if (rates) {
      resolve(rates); // データが存在する場合、Promiseを成功させる
    } else {
      reject("No rates"); // データがない場合、Promiseを失敗させる
    }
  });
