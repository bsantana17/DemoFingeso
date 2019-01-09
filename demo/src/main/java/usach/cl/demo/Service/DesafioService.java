package usach.cl.demo.Service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import usach.cl.demo.Model.Desafio;
import usach.cl.demo.Model.Idea;
import usach.cl.demo.Repository.DesafioRepository;
import usach.cl.demo.Repository.IdeaRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/desafios")
public class DesafioService {
    @Autowired
    private DesafioRepository desafioRepository;
    @Autowired
    private IdeaRepository ideaRepository;

    @GetMapping(value = "/")
    @ResponseBody
    public List<Desafio> findAll(){return desafioRepository.findAll();}

    @PostMapping(value = "/create")
    @ResponseBody
    public Desafio create(@RequestBody Desafio resource){
        resource.setFecha(new Date());
        resource.setId(ObjectId.get());
        resource.setIdeas(new ArrayList<>());
        return desafioRepository.save(resource);
    }

    @PutMapping("/{id}/addIdea")
    @ResponseBody
    public Desafio addIdea(@PathVariable String id, @RequestBody Idea idea){
        idea.setLikes(0);
        idea.setDate(new Date());
        idea.setId(ObjectId.get());
        ideaRepository.save(idea);
        Desafio desafio = desafioRepository.findById(id).orElse(null);
        if(desafio != null){
            List<Idea> ideas = desafio.getIdeas();
            ideas.add(idea);
            desafio.setIdeas(ideas);
            return desafioRepository.save(desafio);
        }
        return null;
    }
}
