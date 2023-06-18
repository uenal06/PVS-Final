package com.pvs.muueit.Controller;

import com.pvs.muueit.Entity.ToDo;
import com.pvs.muueit.Resource.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ToDoController {

    @Autowired
    TodoRepo todoRepo;


    @GetMapping("/")
    String Greeting() {
        return "Hello from Spring";
    }

    @PostMapping("/todo")
    ToDo newTodo(@RequestBody ToDo newTodo) {
        return todoRepo.save(newTodo);
    }

    @GetMapping("/todos")
    List<ToDo> getAllTodos() {
        return todoRepo.findAll();
    }

    @GetMapping("/todo/{id}")
    ToDo getTodoById(@PathVariable Long id) throws Exception {
        return todoRepo.findById(id).orElseThrow(() -> new Exception("ToDo with id " + id + " not Found"));
    }

    @PutMapping("/todo/{id}")
    ToDo updateTodo(@RequestBody ToDo newTodo, @PathVariable Long id) throws Exception {
        return todoRepo.findById(id).map(todo -> {
            todo.setDescription(newTodo.getDescription());
            todo.setTask(newTodo.getTask());
            todo.setPriority(newTodo.getPriority());
            return todoRepo.save(todo);
        }).orElseThrow(() -> new Exception("ToDo with id " + id + " not Found"));

    }

    @DeleteMapping("/todo/{id}")
    String deleteTodo(@PathVariable Long id) throws Exception {
        if (!todoRepo.existsById(id)) {
            throw new Exception("ToDo with id " + id + " not Found");
        }
        todoRepo.deleteById(id);
        return "User with id " + id + " has been deleted success.";
    }


}
