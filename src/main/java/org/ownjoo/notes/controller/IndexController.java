package org.ownjoo.notes.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController
{
    String view = "index.html";

    @RequestMapping(value = "/")
    public String index()
    {
        return view;
    }
}
