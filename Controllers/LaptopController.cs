using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LaptopController: ControllerBase
    {
        private readonly ILaptopService _laptopService;
        public LaptopController(ILaptopService laptopService)
        {
            _laptopService = laptopService;
        }

        // GET: api/Laptops
        [HttpGet]
        public async Task<IEnumerable<Laptop>> Get()
        {
            return await _laptopService.GetLaptopsList();
        }

        // GET: api/Laptops/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Laptop>> Get(int id)
        {
            var laptop = await _laptopService.GetLaptopById(id);

            if (laptop == null)
            {
                return NotFound();
            }

            return Ok(laptop);
        }

        // POST: api/Laptops
        [HttpPost]
        public async Task<ActionResult<Laptop>> Post(Laptop laptop)
        {
            await _laptopService.CreateLaptop(laptop);

            return CreatedAtAction("Post", new { id = laptop.Id }, laptop);
        }

        // PUT: api/Laptops/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Laptop laptop)
        {
            if (id != laptop.Id)
            {
                return BadRequest("Not a valid Laptop id");
            }

            await _laptopService.UpdateLaptop(laptop);

            return NoContent();
        }

        // DELETE: api/Laptops/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var laptop = await _laptopService.GetLaptopById(id);
            if (laptop == null)
            {
                return NotFound();
            }

            await _laptopService.DeleteLaptop(laptop);

            return NoContent();
        }
    }
}
