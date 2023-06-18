package com.pvs.muueit.Resource;

import com.pvs.muueit.Entity.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<ToDo, Long> {

}
