import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import './style.scss'
import '../../modal/style.scss'
import { instance } from '@/api'
import { toast } from 'sonner'

const newSearch = () => {
  console.log('Abri modal')
}

const sendDistrbutionAPI = async () => {
  // ID for test
  const idCompany = 'ae13cff2-56fe-4141-ae4d-34e34fdd714e'

  const customers = await instance.get(`/employer/customer/${idCompany}`)
  const customersWithType: {
    id: string
    name: string
    phoneNumber: string
    age: string
    email: string
    createdAt: Date
    updatedAt: Date
  }[] = customers.data

  const idCustomers = customersWithType.map((item) => item.id)
  if (customers) {
    await instance.post('/employer/sendDistribution', {
      idCompany,
      idCustomers,
    })
  }

  return toast(`Distribuição feita para ${customersWithType.length} clientes`)
}

export const SatisfactionSurveyTable = () => {
  return (
    <div>
      <div className="tableBlock">
        <div className="topBlockDiv">
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="newSearchButton" onClick={newSearch}>
                  <p>NOVA PESQUISA</p>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent
                style={{
                  height: 385,
                  width: 736,
                  borderRadius: 10,
                  backgroundColor: '#323232',
                  justifyContent: 'center',
                }}
              >
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <p style={{ color: '#FCFCFC' }}>
                      Em quais canais de comunicação você deseja distribuir sua
                      pesquisa?
                    </p>
                  </AlertDialogTitle>
                  <AlertDialogDescription
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: 30,
                      }}
                    >
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label style={{ color: '#FCFCFC' }}> Whatsapp</label>
                        <br></br>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label style={{ color: '#FCFCFC' }}> E-mail</label>
                        <br></br>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label style={{ color: '#FCFCFC' }}> SMS link</label>
                        <br></br>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: 30,
                      }}
                    >
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label style={{ color: '#FCFCFC' }}>
                          {' '}
                          Lista de links
                        </label>
                        <br></br>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label style={{ color: '#FCFCFC' }}>Links</label>
                        <br></br>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label style={{ color: '#FCFCFC' }}> QR code</label>
                        <br></br>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 70,
                  }}
                >
                  <AlertDialogAction
                    style={{
                      backgroundColor: '#05cd78',
                      color: '#FCFCFC',
                      width: '158',
                      height: '52',
                      borderRadius: '5',
                    }}
                    onClick={sendDistrbutionAPI}
                  >
                    Confirmar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <input className="searchInput" placeholder="Procurar" type="text" />
        </div>
        <div className="bottonBlockDiv">
          <div className="tableInfoSpaces">
            <div className="tableTitles">Nome</div>
            <div className="blackLineDiv" />
            <div className="tableInfos">Teste</div>
            <div className="blackLineDivLow" />
          </div>
          <div className="tableInfoSpaces">
            <div className="tableTitles">Respondido</div>
            <div className="blackLineDiv" />
            <div className="tableInfos">0</div>
            <div className="blackLineDivLow" />
          </div>
          <div className="tableInfoSpaces">
            <div className="tableTitles">Pendente</div>
            <div className="blackLineDiv" />
            <div className="tableInfos">0</div>
            <div className="blackLineDivLow" />
          </div>
          <div className="tableInfoSpaces">
            <div className="tableTitles">Criado em</div>
            <div className="blackLineDiv" />
            <div className="tableInfos">29/02/2024</div>
            <div className="blackLineDivLow" />
          </div>
          <div className="tableInfoSpaces">
            <div className="tableTitles">Distribuição</div>
            <div className="blackLineDiv" />
            <div className="tableInfos text-red-500">Não definida</div>
            <div className="blackLineDivLow" />
          </div>
        </div>
      </div>
    </div>
  )
}
