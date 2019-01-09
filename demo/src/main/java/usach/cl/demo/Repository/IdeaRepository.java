package usach.cl.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import usach.cl.demo.Model.Idea;
@CrossOrigin(origins = "http://localhost:4200")
public interface IdeaRepository extends MongoRepository<Idea, String> {
}
