import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { buscar, deletar } from '../../../service/Service'
import Produto from '../../../model/Produto'
import {toastAlerta} from '../../../util/toastAlerta'
function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','sucesso')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso','sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar o Produto','erro')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja deletar o produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Postagem</header>
        <div className="p-4">
          <p className='text-xl h-full'>{produto.produto}</p>
          <p>{produto.categoria?.tipo}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarProduto}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto