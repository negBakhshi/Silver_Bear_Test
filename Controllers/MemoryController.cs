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
    public class MemoryController : ControllerBase
    {
        private readonly IMemoryService _memorieservice;

        public MemoryController(IMemoryService memoryService)
        {
            _memorieservice = memoryService;
        }

        // GET: api/Memories
        [HttpGet]
        public async Task<IEnumerable<Memory>> Get()
        {
            return await _memorieservice.GetMemoriesList();
        }

        // GET: api/Memories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Memory>> Get(int id)
        {
            var memory = await _memorieservice.GetMemoryById(id);

            if (memory == null)
            {
                return NotFound();
            }

            return Ok(memory);
        }

        // POST: api/Memories
        [HttpPost]
        public async Task<ActionResult<Memory>> Post(Memory memory)
        {
            await _memorieservice.CreateMemory(memory);

            return CreatedAtAction("Post", new { id = memory.Id }, memory);
        }

        // PUT: api/Memories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Memory memory)
        {
            if (id != memory.Id)
            {
                return BadRequest("Not a valid Memory id");
            }

            await _memorieservice.UpdateMemory(memory);

            return NoContent();
        }

        // DELETE: api/Memories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid Memory id");

            var memory = await _memorieservice.GetMemoryById(id);
            if (memory == null)
            {
                return NotFound();
            }

            await _memorieservice.DeleteMemory(memory);

            return NoContent();
        }
    }
}
