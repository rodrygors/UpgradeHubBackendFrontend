package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
//@EnableWebSecurity
public class SpringSecurity extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(userDetailsService);
    }

    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
                /*.authorizeRequests()
                .antMatchers("/login").permitAll()
                .antMatchers("/Admin").hasAnyRole("ADMIN","USER")
                .antMatchers("/products/**").hasAnyRole("ADMIN", "USER")
                .antMatchers("/User").hasRole("USER")
                .antMatchers("/swagger-ui/**").authenticated()
                .antMatchers("/").permitAll()
                .and().httpBasic();*/
    }
    @Bean
    public PasswordEncoder getPassword() {
        return NoOpPasswordEncoder.getInstance();
    }
}
