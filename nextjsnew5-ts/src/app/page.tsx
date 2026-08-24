import React from "react";

async function page() {
  // ssr
  // let response = await  fetch('http://localhost:3000/api/user',{
  //   cache:'no-cache'
  // })
  // let data=await response.json()
  // console.log(Object);

  //ssg
  // let response = await fetch("http://localhost:3000/api/user", {
  //   cache: "force-cache",
  // });
  // let data = await response.json();
  // console.log(data);

  //isr
  let response = await fetch("http://localhost:3000/api/user", {
    next: { revalidate: 5 },
  });
  let data = await response.json();
  console.log(data);

  // const handleApi = async () => {
  //   let response = await fetch("/api/user");
  //   let data = await response.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   handleApi();
  // }, []);
  return <div></div>;
}
export default page;
