package usach.cl.demo.Service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import usach.cl.demo.Model.Idea;
import usach.cl.demo.Repository.IdeaRepository;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/ideas")
public class IdeaService {
    @Autowired
    private IdeaRepository ideaRepository;

    @GetMapping(value = "/")
    @ResponseBody
    public List<Idea> findAll(){return ideaRepository.findAll();}

    @PostMapping(value = "/create")
    @ResponseBody
    public Idea create(@RequestBody Idea resource){
        resource.setDate(new Date());
        resource.setLikes(0);
        resource.setId(ObjectId.get());
        return ideaRepository.save(resource);
    }
}
