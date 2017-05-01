using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuutoNet.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HuutoNet.Controllers
{
    [Route("api/[controller]")]
    public class HuutoNetController : Controller
    {
        private readonly IHuutoNetService HuutoNetService;

        public HuutoNetController(IHuutoNetService huutoNetService)
        {
            HuutoNetService = huutoNetService;
        }

        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var categories = await HuutoNetService.GetAllCategories();
                return Ok(categories);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest();
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
