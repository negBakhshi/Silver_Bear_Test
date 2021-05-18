using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StorageController : ControllerBase
    {
        private readonly IStorageService _storageService;

        public StorageController(IStorageService storageService)
        {
            _storageService = storageService;
        }

        // GET: api/Storages
        [HttpGet]
        public async Task<IEnumerable<Storage>> Get()
        {
            return await _storageService.GetStoragesList();
        }

        // GET: api/Storages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Storage>> Get(int id)
        {
            var storage = await _storageService.GetStorageById(id);

            if (storage == null)
            {
                return NotFound();
            }

            return Ok(storage);
        }

        // POST: api/Storages
        [HttpPost]
        public async Task<ActionResult<Storage>> Post(Storage storage)
        {
            await _storageService.CreateStorage(storage);

            return CreatedAtAction("Post", new { id = storage.Id }, storage);
        }

        // PUT: api/Storages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Storage storage)
        {
            if (id != storage.Id)
            {
                return BadRequest("Not a valid Storage id");
            }

            await _storageService.UpdateStorage(storage);

            return NoContent();
        }

        // DELETE: api/Storages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid Storage id");

            var storage = await _storageService.GetStorageById(id);
            if (storage == null)
            {
                return NotFound();
            }

            await _storageService.DeleteStorage(storage);

            return NoContent();
        }
    }
}
