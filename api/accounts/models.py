from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# Create your models here.

class UserAccountManager(BaseUserManager):

    def create_user(self, username, password=None):
        if not username:
            raise ValueError('User must have an username')
        
        user=self.model(
            username= username,
        )
        user.set_password(password)
        user.save()
        return user


    def create_superuser(self, username, password ):
        user = self.create_user(
            username = username,
            password = password,
        )

        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save()
        return user


class District(models.Model):
    district = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.district



class School(models.Model):
    school_name = models.CharField(max_length=255, unique=True)
    district = models.ForeignKey(District, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.school_name

# class Birth(models.Model):
#     birth_year = models.int(max_length=4, blank=True, null=True)

    # @property
    # def age(birthdate):
    #     today = date.today()
    #     age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    #     return age


class UserAccount(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    student_id = models.CharField(max_length=50, unique=True, blank=True, null=True)
    school_name = models.ForeignKey(School, on_delete=models.DO_NOTHING, blank=True, null=True)
    birth_year = models.IntegerField(blank=True, null=True)
    phone_number = models.CharField(max_length=10, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_admin       =   models.BooleanField(default=False)
    is_staff       =   models.BooleanField(default=False)
    is_active      =   models.BooleanField(default=True)
    is_superadmin  =   models.BooleanField(default=False)

    


    objects         =   UserAccountManager()


    USERNAME_FIELD  =   'username'
    # REQUIRED_FIELDS = ['student_id', 'school_name', 'birth_year', 'phone_number']

    
    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, add_label):
        return True

