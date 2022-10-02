<template>
  <div class="grid h-screen place-items-center">
    <Form title="Kayıt Formu" buttonText="Kayıt ol" signUp="true">
      <InputBox name="email" type="email" placeholder="john@doe.com" label="E-posta hesabınız"/>
      <InputBox name="username" type="text" placeholder="username" label="Kullanıcı adı"/>
      <InputBox name="password" type="password" placeholder="********" label="Şifre"/>
      <InputBox name="password-r" type="password" placeholder="********" label="Şifre tekrar"/>
    </Form>
  </div>
</template>