package org.ownjoo.globlitics.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController
{
    static final String view = "login";

    @RequestMapping(value = {"/" + view, "/" + view + "/"})
    public String index()
    {
        return view;
    }
}
