package com.example.webprogrammering_oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class BillettsalgController {
    private final List<Billettsalg> alleBestilteBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void leggTilNyBilletter (Billettsalg billett){
        alleBestilteBilletter.add(billett);
    }

    @GetMapping("/hentAlleBilletter")
    public List<Billettsalg> henteAlleBilletter() {
        return alleBestilteBilletter;
    }

    @GetMapping("/slettAlleBilletter")
    public void slettBilletter(){
        alleBestilteBilletter.clear();
    }

    /*@GetMapping("/hello")
    public String hello() {
        return "jhgkfjs";
    }*/
}

