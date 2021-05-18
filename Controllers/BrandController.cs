using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService _brandService;

        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        // GET: api/Brand
        [HttpGet]
        public async Task<IEnumerable<Brand>> Get()
        {
            return await _brandService.GetBrandsList();
        }

        // GET: api/Brand/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Brand>> Get(int id)
        {
            var brand = await _brandService.GetBrandById(id);

            if (brand == null)
            {
                return NotFound();
            }

            return Ok(brand);
        }

        // POST: api/Brand
        [HttpPost]
        public async Task<ActionResult<Brand>> Post(Brand brand)
        {
            await _brandService.CreateBrand(brand);

            return CreatedAtAction("Post", new { id = brand.Id }, brand);
        }

        // PUT: api/Brand/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Brand Brand)
        {
            if (id != Brand.Id)
            {
                return BadRequest("Not a valid Brand id");
            }

            await _brandService.UpdateBrand(Brand);

            return NoContent();
        }

        // DELETE: api/Brand/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid Brand id");

            var brand = await _brandService.GetBrandById(id);
            if (brand == null)
            {
                return NotFound();
            }

            await _brandService.DeleteBrand(brand);

            return NoContent();
        }
    }
}
