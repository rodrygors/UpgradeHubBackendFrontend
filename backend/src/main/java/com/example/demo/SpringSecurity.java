package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
//@EnableWebSecurity
public class SpringSecurity extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .cors().and()
//                .authorizeRequests()
//                .antMatchers("/admin/**").authenticated()//.hasAnyRole("ADMIN","USER")
//                .and().formLogin().loginPage("/login").permitAll()
//                .and().logout();
        http.csrf().disable();
        http.headers().frameOptions().disable();
    }
}
