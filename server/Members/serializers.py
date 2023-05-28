from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    pass

class UserLoginSerializer(serializers.Serializer):
    pass

class UserSerializer(serializers.ModelSerializer):
    pass