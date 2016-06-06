FROM php:5.6-apache

MAINTAINER Ciani Antony <antony.ciani@heig-vd.ch>

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*


