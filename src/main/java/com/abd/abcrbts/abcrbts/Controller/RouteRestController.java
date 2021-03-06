package com.abd.abcrbts.abcrbts.Controller;

import com.abd.abcrbts.abcrbts.Model.Route;
import com.abd.abcrbts.abcrbts.Service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RouteRestController {
    @Autowired
    private RouteService routeService;

    @RequestMapping(value = "/routes/table",method = RequestMethod.GET,produces = "application/json")
    public List<Route> findList()
    {
        List<Route> data=routeService.findAll();
        return data;
    }
    @RequestMapping(value = "/routes/tables",method = RequestMethod.GET,produces = "application/json")
    public List<Route> dataTable()
    {
        List<Route> data=routeService.dataTable();
        return data;
    }
}
