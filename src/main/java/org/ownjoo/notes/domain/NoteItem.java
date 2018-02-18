package org.ownjoo.notes.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Pattern;

@Data
@Entity
public class NoteItem
{
	private final static String NORMAL = "(|^[\\w+-_+.#].*)";
	private final static String URL = "(^[\\w:/.-_?&=+].*)";

    @Id
    @GeneratedValue
    private Long id;

	@Pattern(regexp=NORMAL)
	private String toolTipText;

	@Pattern(regexp=NORMAL)
    private String title;

	@Pattern(regexp=NORMAL)
	private String headline;

	@Pattern(regexp=NORMAL)
	private String content;

	public NoteItem(){}
    public NoteItem(String toolTipText, String title, String headline, String content)
    {
	    this.toolTipText = toolTipText;
	    this.title = title;
	    this.headline = headline;
    	this.content = content;
    }
}
