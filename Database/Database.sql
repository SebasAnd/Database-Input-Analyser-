PGDMP         #                x            crm    12.0    12.0     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    123318    crm    DATABASE     �   CREATE DATABASE crm WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE crm;
                postgres    false            �            1259    123319    campania    TABLE     �   CREATE TABLE public.campania (
    nombres character varying(250),
    apellidos character varying(250),
    telefonos character varying(250),
    direcciones character varying(500),
    codigo_camp character varying(250)
);
    DROP TABLE public.campania;
       public         heap    postgres    false            �
          0    123319    campania 
   TABLE DATA           [   COPY public.campania (nombres, apellidos, telefonos, direcciones, codigo_camp) FROM stdin;
    public          postgres    false    202   �       �
   �   x���A� �5����V/�	�h��K��?�q�i�SC!��,�1CɴE��5�.�q�j/��8s��U�<�`���NT�Ӿ��=��	U�����uh��Ύ�@A1D�Q%Y}8")HA��S~���ә ��\/>̦�`6�b6R��z���!��݈�Ƃ���"7��)��b�b>�Yp,���]h�0r��0�FK��4
��HN��r��-�     