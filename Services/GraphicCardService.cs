using FirstCoreAngularTry.Data;
using FirstCoreAngularTry.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Services
{
    public class GraphicCardService : IGraphicCardService
    {
        private readonly SilverBearDBContext _dbcontext;

        public GraphicCardService(SilverBearDBContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<GraphicCard>> GetGraphicCardsList()
        {
            return await _dbcontext.GraphicCards
                .Where(g => !g.Archived)
                .Include(x => x.Model)
                .Include(x => x.Model.Brand)
                .ToListAsync();
        }

        public async Task<GraphicCard> GetGraphicCardById(int id)
        {
            return await _dbcontext.GraphicCards
                .Include(x => x.Model)
                .Include(x => x.Model.Brand)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<GraphicCard> CreateGraphicCard(GraphicCard GraphicCard)
        {
            _dbcontext.GraphicCards.Add(GraphicCard);
            await _dbcontext.SaveChangesAsync();
            return GraphicCard;
        }
        public async Task UpdateGraphicCard(GraphicCard GraphicCard)
        {
            _dbcontext.GraphicCards.Update(GraphicCard);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteGraphicCard(GraphicCard GraphicCard)
        {
            _dbcontext.GraphicCards.Remove(GraphicCard);
            await _dbcontext.SaveChangesAsync();
        }
    }
}
