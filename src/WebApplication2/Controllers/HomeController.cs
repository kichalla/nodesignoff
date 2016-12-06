using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public async Task<IActionResult> MyAction([FromServices] INodeServices nodeServices)
        {
            //var result = await nodeServices.InvokeExportAsync<int>("./wwwroot/main", "addNumbers", 1, 2);
            //return Content("1 + 2 = " + result);

            var result = await nodeServices.InvokeExportAsync<string>("./wwwroot/main", "sayHelloInSpanish");
            return Content(result);
        }
    }
}
