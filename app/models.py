# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.
from __future__ import unicode_literals

from django.db import models

class Maps(models.Model):
    map_name = models.CharField(primary_key=True, unique=True, max_length=50)
    advantage = models.CharField(max_length=45, blank=True)
    map_pool = models.CharField(max_length=45, blank=True)
    game_mode = models.CharField(max_length=45, blank=True)
    competitive = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'Maps'

class Players(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=45)
    gamertag = models.CharField(primary_key=True, unique=True, max_length=45)
    team_name = models.ForeignKey('Teams', db_column='team_name', blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    country_of_origin = models.CharField(max_length=45, blank=True)
    kdr = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    headshot_percentage = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    favorite_weapon = models.ForeignKey('Weapons', db_column='favorite_weapon', blank=True, null=True)
    best_map = models.ForeignKey('Maps', db_column='best_map', blank=True, null=True, related_name='players_best_map')
    worst_map = models.ForeignKey('Maps', db_column='worst_map', blank=True, null=True, related_name='players_worst_map')
    class Meta:
        managed = False
        db_table = 'Players'

class Teams(models.Model):
    team_name = models.CharField(primary_key=True, unique=True, max_length=50)
    country_of_origin = models.CharField(max_length=45, blank=True)
    rank = models.IntegerField(blank=True, null=True)
    region = models.CharField(max_length=10, blank=True)
    wins = models.IntegerField(blank=True, null=True)
    losses = models.IntegerField(blank=True, null=True)
    draws = models.IntegerField(blank=True, null=True)
    coach_name = models.CharField(max_length=45, blank=True)
    coach_gamertag = models.CharField(max_length=45, blank=True)
    best_map = models.ForeignKey(Maps, db_column='best_map', blank=True, null=True, related_name='teams_best_map')
    worst_map = models.ForeignKey(Maps, db_column='worst_map', blank=True, null=True, related_name='teams_worst_map')
    class Meta:
        managed = False
        db_table = 'Teams'

class Weapons(models.Model):
    weapon_name = models.CharField(primary_key=True, unique=True, max_length=50)
    weapon_class = models.CharField(max_length=50)
    price = models.IntegerField(blank=True, null=True)
    magazine_size = models.IntegerField(blank=True, null=True)
    total_bullets = models.IntegerField(blank=True, null=True)
    firing_modes = models.CharField(max_length=45, blank=True)
    used_by = models.CharField(max_length=45)
    class Meta:
        managed = False
        db_table = 'Weapons'

class AuthGroup(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(unique=True, max_length=80)
    class Meta:
        managed = False
        db_table = 'auth_group'

class AuthGroupPermissions(models.Model):
    id = models.IntegerField(primary_key=True)
    group = models.ForeignKey(AuthGroup)
    permission = models.ForeignKey('AuthPermission')
    class Meta:
        managed = False
        db_table = 'auth_group_permissions'

class AuthPermission(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    content_type = models.ForeignKey('DjangoContentType')
    codename = models.CharField(max_length=100)
    class Meta:
        managed = False
        db_table = 'auth_permission'

class AuthUser(models.Model):
    id = models.IntegerField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField()
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=75)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'auth_user'

class AuthUserGroups(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(AuthUser)
    group = models.ForeignKey(AuthGroup)
    class Meta:
        managed = False
        db_table = 'auth_user_groups'

class AuthUserUserPermissions(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(AuthUser)
    permission = models.ForeignKey(AuthPermission)
    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'

class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    class Meta:
        managed = False
        db_table = 'django_content_type'

class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'django_migrations'

class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'django_session'

class DjangoSite(models.Model):
    id = models.IntegerField(primary_key=True)
    domain = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    class Meta:
        managed = False
        db_table = 'django_site'

class SouthMigrationhistory(models.Model):
    id = models.IntegerField(primary_key=True)
    app_name = models.CharField(max_length=255)
    migration = models.CharField(max_length=255)
    applied = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'south_migrationhistory'

