using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using WebBR.Models;
using WebBR.Providers;
//using WebBR.Results;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using System.Web.Script.Serialization;

namespace WebBR.Controllers
{
	//[Authorize]
	[RoutePrefix("Heroes")]
	public class HeroesController : ApiController
	{
		private const string LocalLoginProvider = "Local";

		public HeroesController()
		{
		}

		[HttpGet]
		[Route("PatientInfo")]
		public string PatientInfo()
		{
            List<hs> y = new List<hs>();
			y.Add(new hs(11, "Mr. Nice"));
			y.Add(new hs(12, "Narco"));
			y.Add(new hs(13, "Bombasto"));
			y.Add(new hs(14, "Celeritas"));
			y.Add(new hs(15, "Magneta"));
			y.Add(new hs(16, "RubberMan"));
			y.Add(new hs(17, "Dynama"));
			y.Add(new hs(18, "Dr IQ"));
			y.Add(new hs(19, "Magma"));
            y.Add(new hs(20, "Tornado"));

			return new JavaScriptSerializer().Serialize(y);
        }
	}

	public class hs
	{
		public int id { get; set; }
		public string name { get; set; }

		public hs(int id, string name)
		{
			this.id = id;
			this.name = name;
		}
	}
}

namespace WebBR.Controllers
{
    [TestClass]
    public class testingstuff
    {
        [TestMethod]
        public void athing()
        {
            HeroesController x = new HeroesController();
            x.PatientInfo();
            StringAssert.Equals("", "");
        }
    }
}