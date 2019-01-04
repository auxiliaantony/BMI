using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using BMI.Models;

namespace BMI.Controllers
{
    public class CredentialsController : Controller
    {
        
        Context bc = new Context();

        

        [HttpPost]
        public void mail(string email, string result)
        {
            var fromAddress = ConfigurationManager.AppSettings["fromaddress"];
            var fromPassword = ConfigurationManager.AppSettings["password"];
            var toAddress = email;
            
             using (MailMessage mail = new MailMessage())
            {
              

               mail.From = new MailAddress(fromAddress);
               
                mail.To.Add(toAddress);

                mail.IsBodyHtml = false;
                mail.Subject = "BMI_NOTIFICATION";
               
                var result1= float.Parse(result);

                if (result1 < 18.5)
                {
                    mail.Body = "Hi your BMI rate is " + result + "\n" + "you are in  under level";

                }

                else if (result1 >= 18.5 || result1 <= 25)
                {
                    mail.Body = "Hi your BMI rate is " + result + "\n" + "you are in normal level";

                }
                else if (result1 > 25 || result1 <= 30)
                {
                    mail.Body = "Hi your BMI rate is " + result + "\n" + "you are in overweight level";

                }
                else if (result1 > 30)
                {
                    mail.Body = "Hi your BMI rate is " + result + "\n" + "you are in obese level";
                }
                

                using (SmtpClient smtp = new SmtpClient())
                {
                    smtp.Host = "smtp-mail.outlook.com";
                    smtp.EnableSsl = true;
                    System.Net.NetworkCredential networkCredential = new System.Net.NetworkCredential(fromAddress, fromPassword);
                    smtp.UseDefaultCredentials = true;
                    smtp.Credentials = networkCredential;
                    smtp.Port = 587;
                    smtp.Send(mail);

                }


            }
        }


        [HttpPost]
        public void insert(Credentials credentials)
        {

            bc.creadentials.Add(credentials);
            bc.SaveChanges();

        }



    }
}