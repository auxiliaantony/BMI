using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BMI.Models;

namespace BMI.Controllers
{
    public class LoginController : Controller
    {
        Context bc = new Context();
        [HttpPost]
        public void  validate(string mailid, string password,string result)
        {
            Credentials up = bc.creadentials.FirstOrDefault(x => x.Password == password && x.Mail == mailid);
            if (up == null)
            {
                Response.Redirect("http://localhost:52922/Login.html");

            }
            else
            {
            
            up.Result = float.Parse(result);

                CredentialsController b = new CredentialsController();
                b.mail(mailid, result);
                bc.SaveChanges();
                Response.Redirect("Main.html");
                
            }
        }

    }
}