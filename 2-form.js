import"./assets/modulepreload-polyfill-B5Qt9EMX.js";(()=>{const e={formData:JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},form:document.querySelector(".feedback-form"),storageKey:"feedback-form-state"};e.form.elements.message.value=e.formData.message,e.form.elements.email.value=e.formData.email;function t(){localStorage.setItem(e.storageKey,JSON.stringify(e.formData))}function r(a){e.formData[a.target.name]=a.target.value.trim(),t()}function m(a){if(a.preventDefault(),!e.formData.email||!e.formData.message){alert("Fill please all fields");return}console.log(e.formData),localStorage.removeItem(e.storageKey),e.formData.email="",e.formData.message="",e.form.reset()}e.form.addEventListener("input",r),e.form.addEventListener("submit",m)})();
//# sourceMappingURL=2-form.js.map
