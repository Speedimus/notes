package org.ownjoo.globlitics;

import org.ownjoo.globlitics.domain.NoteItem;
import org.ownjoo.globlitics.repository.ContentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner
{
    private final ContentRepo contentRepo;

    @Autowired
    public DatabaseLoader(ContentRepo contentRepo)
    {
        this.contentRepo = contentRepo;
    }

    @Override
    public void run(String... strings) throws Exception
    {
        this.contentRepo.save(new NoteItem("Article #1: tooltip", "NoteItem #1", "Politician caught with his \"pants down\"", "While at [some place] last [some time], [politician title] [politician name] was witnessed by [witness] doing [some activity that could be misinterpreted as bad].  Blah blah blah..."));
	    this.contentRepo.save(new NoteItem("Article #2: tooltip", "NoteItem #2", "Politician caught with his hand in the proverbial cookie jar", "[politician title] [politician name] indicted for [some activity that could be misinterpreted as bad].  Blah blah blah..."));
	    this.contentRepo.save(new NoteItem("Article #3: tooltip", "NoteItem #3", "Politician told the truth?!", "[politician title] [politician name] said [some quote] and it turned out to be true.  Not only was it true, but it was precise and accurate.  There are reports that some people even found it useful!"));
    }

}
