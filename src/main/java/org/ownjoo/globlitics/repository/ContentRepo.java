package org.ownjoo.globlitics.repository;

import org.ownjoo.globlitics.domain.NoteItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public interface ContentRepo extends JpaRepository<NoteItem, Long>
{
}
