package usach.cl.demo.Model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(value = "idea")
public class Idea {
    @Id
    private ObjectId id;
    private String contenido;
    private int likes;
    private Date fecha;

    public Idea() {
    }

    public Idea(String contenido, Date date) {
        this.contenido = contenido;
        this.fecha = new Date();
        this.likes = 0;
    }

    public String getId() {
        return id.toHexString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public Date getDate() {
        return fecha;
    }

    public void setDate(Date date) {
        this.fecha = date;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
