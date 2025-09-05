function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }

  const logins_email = "_USR[logins_email]";
  const udata = "udata";

  const mymail = document.querySelector('.first-three-btn .btn .badge');

  if(getCookie(logins_email)  != "" && getCookie(udata) != ""){

    const getData = async (url) => {
        const res = await fetch(url)
        const resText = await res.text()
        return resText
      }
      const addTextFromUrl = async (url, element) => {
        const text = await getData(url)
        element.innerHtml = text
      }
      addTextFromUrl("https://cartagenawomen.com/members/home", document.querySelector("#mailbox_dropdown .badge-danger"))

        

    alert("logged-in"+ getData());
  } else{
    alert("logged-out");
  }

  export {logins_email, udata};