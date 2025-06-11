import { z } from "zod"
import { Button, ButtonVariations, Input, Title } from "../../components"
import * as S from "./style"
import { useAuth } from "../../context/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const loginSchema = z.object({
  email: z.string().min(1, {message: "Email é obrigatório"}).email("Email Inválido"),
  password: z.string().min(6, {message: "Senha deve conter no mínimo 6 caracteres"}),
})

type LoginFormData = z.infer<typeof loginSchema>;
export const Login = () => {
  const navigation = useNavigate()
  const {login: loginFirebase} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {

    try {
      await loginFirebase(data.email, data.password);
      navigation("/")
    } catch (error) {
      console.error("Erro ao fazer login:", error)
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TitleContainer>
          <Title />
          <S.Title>Bem Vindo</S.Title>
        </S.TitleContainer>
        <S.InputContainer>
          <Input<LoginFormData> 
          label="email" 
          id="login" 
          name="email" 
          type="text" 
          register={register}
          errorMessage={errors.email?.message}
          />
          <Input<LoginFormData>
          label="Senha" 
          id="password" 
          name="password" 
          type="password" 
          register={register}
          errorMessage={errors.password?.message}
          />
        </S.InputContainer>
        <S.ButtonContainer>
            <Button to={"/register"} variation={ButtonVariations.ANCHOR}>Cadastrar-se</Button>
            <Button type="submit">Entrar</Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  )
}
